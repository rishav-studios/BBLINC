import ProcessSteps from "@/components/pages/contact/ProcessSteps"
import QuoteForm from "@/components/pages/quote/QuoteForm"
import PageHeader from "@/components/shared/PageHeader"

const page = () => {
    return (
        <main key="quote">
            <PageHeader title="Let's discuss the project" eyebrowText="Get a quote" />
            <QuoteForm />
            <ProcessSteps />
        </main>
    )
}

export default page