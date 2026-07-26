import { Arrow } from '@/components/shared/clickables/CustomLink';
import { variantClasses } from '@/components/shared/clickables/variantClasses';
import { createContactSchema, createContactSchemaType } from '@bbl/types';
import { Badge } from "@bbl/ui/components/badge";
import { Field, FieldError, FieldGroup, FieldLabel } from "@bbl/ui/components/field";
import { Input } from "@bbl/ui/components/input";
import { Textarea } from '@bbl/ui/components/textarea';
import { cn } from '@bbl/ui/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

const ContactForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<createContactSchemaType>({
        resolver: zodResolver(createContactSchema),
        defaultValues: {
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            message: ""
        }
    })
    const contactFormSubmitHandler = (data: createContactSchemaType) => {
        console.log(data);
    }
    return (
        <div className="flex flex-col gap-8 lg:pl-8">
            <div>
                <h2 className="text-4xl font-semibold mb-4">Send an Enquiry</h2>
                <p className="text-gray-500 leading-relaxed max-w-md">
                    Fill out the form below with your project details, and our engineering team will get back to you within 24 hours.
                </p>
            </div>

            <form onSubmit={handleSubmit(contactFormSubmitHandler)} className="flex flex-col gap-6" >
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
                    />
                    <Controller
                        name="companyName"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field className=" " data-invalid={fieldState.invalid}>
                                <FieldLabel className='flex justify-between' htmlFor="companyName">
                                    Company Name
                                    <Badge variant="outline" className='bg-accent'>
                                        Optional
                                    </Badge>
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
                    <Controller
                        name="message"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field className="  md:col-span-2" data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="message">
                                    Message
                                </FieldLabel>
                                <Textarea
                                    {...field}
                                    id="message"
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

                <button
                    type="submit"
                    className={cn(variantClasses["button-brand"].base, variantClasses["button-brand"].hover, "w-max pr-2 ml-auto group/custom-link mt-4")}
                >
                    Send Enquiry
                    <Arrow variant="black" />
                </button>
            </form>
        </div>
    )
}

export default ContactForm