"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@bbl/ui/components/dialog"
import { Field, FieldError, FieldGroup, FieldLabel } from "@bbl/ui/components/field"
import { Input } from "@bbl/ui/components/input"
import { createCatalogueLeadSchema, type CreateCatalogueLeadInput } from "@bbl/types"
import { useForm } from "react-hook-form"
import { submitCatalogueDownload } from "@/app/actions/catalogue"
import { RiDownloadLine, RiLoaderLine } from "@remixicon/react"

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function CatalogueDownloadDialog({ open, onOpenChange }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<CreateCatalogueLeadInput>({
        resolver: zodResolver(createCatalogueLeadSchema),
    })

    const onSubmit = async (data: CreateCatalogueLeadInput) => {
        const result = await submitCatalogueDownload(data)

        if (!result.success) {
            setError("root", { message: result.error })
            return
        }

        // Trigger download then close the dialog
        const a = document.createElement("a")
        a.href = result.downloadUrl
        a.download = "BBLINC_Product_Catalogue.pdf"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        reset()
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Download Catalogue</DialogTitle>
                    <DialogDescription>
                        Fill in your details and we'll start the download immediately.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4">
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                            <Input
                                id="fullName"
                                placeholder="John Doe"
                                aria-invalid={!!errors.fullName}
                                {...register("fullName")}
                            />
                            <FieldError errors={[errors.fullName]} />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email">Email Address</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@company.com"
                                aria-invalid={!!errors.email}
                                {...register("email")}
                            />
                            <FieldError errors={[errors.email]} />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="+91 98765 43210"
                                aria-invalid={!!errors.phone}
                                {...register("phone")}
                            />
                            <FieldError errors={[errors.phone]} />
                        </Field>
                    </FieldGroup>

                    {errors.root && (
                        <p role="alert" className="mt-3 text-sm text-destructive">
                            {errors.root.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? (
                            <>
                                <RiLoaderLine className="h-4 w-4 animate-spin" />
                                Preparing download…
                            </>
                        ) : (
                            <>
                                <RiDownloadLine className="h-4 w-4" />
                                Download Catalogue
                            </>
                        )}
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
