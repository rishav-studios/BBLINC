
"use client"
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Arrow } from "@/components/shared/clickables/CustomLink";
import { variantClasses } from "@/components/shared/clickables/variantClasses";
import { createQuoteSchema, createQuoteSchemaType, Industries } from "@bbl/types";
import { Field, FieldError, FieldGroup, FieldLabel } from "@bbl/ui/components/field";
import { Input } from "@bbl/ui/components/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@bbl/ui/components/select";
import { Textarea } from "@bbl/ui/components/textarea";
import { cn } from "@bbl/ui/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export default function QuoteForm() {
    const { control, handleSubmit } = useForm<createQuoteSchemaType>({
        resolver: zodResolver(createQuoteSchema),
        defaultValues: {
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            projectDetails: "",
            industry: "" as any,
            quantity: "" as any,
            expectedTime: "" as any
        },
    });
    const quoteFormSubmitHandler = (data: createQuoteSchemaType) => {
        console.log(data);
    }
    return (
        <Section className="bg-[#fafaf8] py-20 min-h-max">
            <Container>
                <div className="max-w-4xl mx-auto flex flex-col gap-10 bg-white p-8 md:p-12 rounded-2xl border border-black/10 shadow-sm">

                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-semibold">Request a Comprehensive Quote</h2>
                        <p className="text-gray-500">
                            Provide your project details below. Our engineering team will review your requirements and respond within 24 hours.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(quoteFormSubmitHandler)} className="space-y-6">

                        {/* full name, company name, email, phone */}
                        <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Controller
                                name="fullName"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field className=" " data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="fullName">
                                            Full Name
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="fullName"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            /><Controller
                                name="companyName"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field className=" " data-invalid={fieldState.invalid}>
                                        <FieldLabel className='flex justify-between' htmlFor="companyName">
                                            Company Name
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="companyName"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"

                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="email"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field className=" " data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="email">
                                            Email Address
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="email"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field className=" " data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="phone">
                                            Phone Number
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="phone"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>

                        {/* industry, quantity, expected time  */}
                        <FieldGroup className="grid grid-cols-1 md:grid-cols-3">
                            <Controller
                                name="industry"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field className=" " data-invalid={fieldState.invalid}>
                                        <FieldLabel>
                                            Industry
                                        </FieldLabel>
                                        <Select
                                            {...field}
                                            aria-invalid={fieldState.invalid}>
                                            <SelectTrigger className="w-full py-5">
                                                <SelectValue placeholder="Select a industry" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Fruits</SelectLabel>
                                                    {
                                                        Object.values(Industries).map((industry) => (
                                                            <SelectItem key={industry} value={industry}>
                                                                {industry}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="quantity"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field className=" " data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="quantity">
                                            Quantity
                                        </FieldLabel>
                                        <Input
                                            type="number"
                                            {...field}
                                            id="quantity"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="expectedTime"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <Field className=" " data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="expectedTime">
                                            Expected time (days)
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="expectedTime"
                                            type="number"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>

                        {/* File Upload */}
                        <Controller
                            name="drawing"
                            control={control}
                            render={({ field: { onChange, onBlur, name, ref }, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="drawing">
                                        Upload Drawing (CAD, PDF, STEP)
                                    </FieldLabel>
                                    <div className="relative group cursor-pointer">
                                        <input
                                            type="file"
                                            id="drawing"
                                            name={name}
                                            ref={ref}
                                            onBlur={onBlur}
                                            onChange={(e) => onChange(e.target.files?.[0])}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div className={cn(
                                            "flex flex-col items-center justify-center gap-2 px-4 py-8 rounded-lg border-2 border-dashed transition-colors",
                                            fieldState.invalid
                                                ? "border-red-400 bg-red-50"
                                                : "border-black/20 bg-[#fafaf8] group-hover:bg-primary/5 group-hover:border-primary/50"
                                        )}>
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                                </svg>
                                            </div>
                                            <p className="text-sm font-medium text-foreground">Click to upload or drag and drop</p>
                                            <p className="text-xs text-gray-500">Max file size: 10MB · Images, PDF, DWG, DXF, STEP</p>
                                        </div>
                                    </div>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        {/* project details */}
                        <Controller
                            name="projectDetails"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field className=" " data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="projectDetails">
                                        Project Details
                                    </FieldLabel>
                                    <Textarea
                                        {...field}
                                        id="projectDetails"
                                        aria-invalid={fieldState.invalid}
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        {/* Submit */}
                        <div className="md:col-span-6 pt-4 flex justify-end">
                            <button
                                type="submit"
                                className={cn(variantClasses["button-brand"].base, variantClasses["button-brand"].hover, "w-full md:w-max pr-2 group/custom-link")}
                            >
                                Submit Request
                                <Arrow variant="black" />
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </Section >
    );
}
