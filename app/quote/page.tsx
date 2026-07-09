import ProcessSteps from "@/components/pages/contact/ProcessSteps"
import QuoteForm from "@/components/pages/quote/QuoteForm"
import PageHeader from "@/components/shared/PageHeader"

const page = () => {
    return (
        <>
            <PageHeader title="Let's discuss the project" eyebrowText="Get a quote" />
            <QuoteForm />
            <ProcessSteps />
        </>
    )
}

export default page