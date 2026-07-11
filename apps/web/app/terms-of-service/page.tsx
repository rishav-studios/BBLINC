import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import PageHeader from "@/components/shared/PageHeader";

export default function TermsOfServicePage() {
    return (
        <>
            <PageHeader
                title="Terms of Service"
                eyebrowText="Legal"
            />
            <Section className="py-20 min-h-max bg-[#fafaf8]">
                <Container>
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-black/10 shadow-sm flex flex-col gap-8 text-gray-700 leading-relaxed">

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">1. General Agreement</h2>
                            <p>
                                Welcome to BBLINC. By accessing our website, requesting a quote, or engaging our manufacturing services, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree with any part of these terms, you may not use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">2. Manufacturing Services</h2>
                            <p>
                                BBLINC specializes in the manufacturing of customized precision components using Brass, Stainless Steel, Aluminum, Copper, Bronze, Carbon Steel, and other specialized alloys. Our services cater to a diverse range of sectors including Automotive, Aerospace, Defense, Industrial Engineering, Hydraulics, HVAC, Oil & Gas, Agriculture, and Renewable Energy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">3. Quotes, Orders, and Specifications</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Quotes:</strong> All quotes provided by BBLINC are based on the drawings, CAD files, and specifications supplied by the customer. Quotes are valid for the period specified within the quote document.</li>
                                <li><strong>Custom-Built Solutions:</strong> Every component is developed strictly in accordance with customer specifications. It is the customer's responsibility to ensure that all provided specifications and technical drawings are accurate and fit for their intended purpose.</li>
                                <li><strong>Order Acceptance:</strong> An order is only considered accepted once BBLINC provides formal written confirmation.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">4. Quality Standards and Deliverables</h2>
                            <p className="mb-2">We are committed to delivering excellence engineered into every component:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Products are manufactured to global engineering standards using superior grade raw materials.</li>
                                <li>All components undergo rigorous multi-stage quality verification, including first article inspection (FAI), in-process monitoring, and final dimensional verification before dispatch.</li>
                                <li>While we strive to ensure flawless engineering solutions, our liability is strictly limited to the replacement or repair of defective components as agreed upon in specific purchase agreements.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">5. Packaging and Global Shipping</h2>
                            <p>
                                BBLINC provides custom packaging solutions, including heavy-duty export cartons, corrugated partition boxes, plywood cases, and VCI (Volatile Corrosion Inhibitor) packaging to ensure secure, worldwide delivery. Shipping timelines and freight methods (Sea, Air, or Road) are optimized based on client requirements. Risk of loss and title transfer are governed by the specific Incoterms agreed upon in the purchase contract.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">6. Intellectual Property</h2>
                            <p>
                                All intellectual property rights pertaining to the drawings and designs provided by the client remain the sole property of the client. Conversely, all manufacturing processes, tooling designs, and proprietary techniques developed by BBLINC during production remain the exclusive intellectual property of BBLINC.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">7. Governing Law and Jurisdiction</h2>
                            <p>
                                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our manufacturing services shall be subject to the exclusive jurisdiction of the courts located in Jamnagar, Gujarat, India.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-gray-200 mt-4">
                            <h2 className="text-2xl font-semibold text-black mb-4">8. Contact Information</h2>
                            <p>For any questions regarding these Terms of Service, please contact us at:</p>
                            <p className="mt-4">
                                <strong>BBLINC</strong><br />
                                3466, GIDC Phase III, GIDC Phase-2, Dared,<br />
                                Jamnagar, Gujarat 361012, India<br />
                                Email: info@bblinc.in<br />
                                Phone: +91 91733 55608 / +91 98796 14827
                            </p>
                        </div>

                    </div>
                </Container>
            </Section>
        </>
    );
}
