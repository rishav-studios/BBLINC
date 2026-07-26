import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import PageHeader from "@/components/shared/PageHeader";

export default function QualityPolicyPage() {
    return (
        <main key="quality-policy">
            <PageHeader
                title="Quality Policy"
                eyebrowText="Commitment"
            />
            <Section className="py-20 min-h-max bg-[#fafaf8]">
                <Container>
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-black/10 shadow-sm flex flex-col gap-10 text-gray-700 leading-relaxed">

                        {/* Section 1: Standards of Products */}
                        <div>
                            <h2 className="text-3xl font-semibold text-black mb-6 border-b pb-2">1. Standards of Products</h2>
                            <p className="mb-4">
                                At BBLINC, excellence is engineered into every component we produce. Our manufacturing philosophy is built on precision, reliability, and uncompromising craftsmanship, ensuring that every product consistently exceeds customer expectations.
                            </p>
                            <p className="mb-4">
                                Using advanced production technologies and well-defined quality protocols, we maintain exceptional control over every stage of the manufacturing process—from material selection and machining to inspection, finishing, and final dispatch. This disciplined approach guarantees superior functionality, long service life, and dependable performance in demanding applications.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-6">
                                <h3 className="text-xl font-medium text-black mb-3">Key Product Attributes:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>High-Precision Engineering</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Superior Grade Raw Materials</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Exceptional Dimensional Accuracy</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Comprehensive Multi-Stage Quality Verification</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Manufactured to Global Engineering Standards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Outstanding Mechanical Strength & Reliability</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2: Inspection & Testing Method */}
                        <div>
                            <h2 className="text-3xl font-semibold text-black mb-6 border-b pb-2">2. Inspection & Testing Method</h2>
                            <p className="mb-4">
                                Every component undergoes a comprehensive inspection and testing process to ensure it meets the highest standards of quality, precision, and performance. Our quality assurance system is designed to detect and eliminate defects at every stage of production, delivering products that consistently satisfy customer requirements and international expectations.
                            </p>
                            <p className="mb-6">
                                From incoming raw materials to final dispatch, each manufacturing step is monitored using advanced measuring instruments and standardized inspection procedures. Our experienced quality team verifies dimensional accuracy, surface finish, material specifications, and functional performance to ensure complete product reliability.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="text-xl font-medium text-black mb-3">Our Inspection & Testing Capabilities:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Incoming Raw Material Inspection & First Article Inspection (FAI)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>In-Process Quality Monitoring & Final Dimensional Verification</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Precision Measurement Using Calibrated Instruments</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Thread Gauge & Profile Inspection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Surface Finish, Visual Examination, & Functional Fitment Testing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>100% Final Inspection for Critical Components</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 3: Environmental Norms */}
                        <div>
                            <h2 className="text-3xl font-semibold text-black mb-6 border-b pb-2">3. Environmental Norms</h2>
                            <p className="mb-4">
                                We are committed to conducting our manufacturing operations in an environmentally responsible and sustainable manner. We believe that industrial growth and environmental stewardship must go hand in hand, and we continuously strive to minimize our ecological footprint through efficient processes and responsible resource management.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-6">
                                <h3 className="text-xl font-medium text-black mb-3">Our Environmental Commitments:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Responsible Utilization of Natural Resources</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Energy-Efficient Manufacturing Practices</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Waste Reduction & Recycling Initiatives</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Safe Storage and Disposal of Industrial Waste</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Compliance with Applicable Environmental Regulations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4: Type Of Boxes Outer Packing */}
                        <div>
                            <h2 className="text-3xl font-semibold text-black mb-6 border-b pb-2">4. Packaging & Outer Packing</h2>
                            <p className="mb-4">
                                At BBLINC, we recognize that secure packaging is just as important as precision manufacturing. Our packaging solutions are designed to protect products throughout storage, handling, and international transportation, ensuring they arrive in perfect condition.
                            </p>
                            <p className="mb-6">
                                We use high-quality packing materials and customized packaging methods based on the product type, size, weight, and customer requirements. Every shipment is carefully prepared to minimize the risk of damage and to maintain product integrity during transit.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="text-xl font-medium text-black mb-3">Packaging Options & Features:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Standard Corrugated Carton Boxes & Heavy-Duty Export Cartons</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Plywood Export Cases, Wooden Crates & Palletized Packaging</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>VCI (Volatile Corrosion Inhibitor) Packaging for Metal Components</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Moisture & Dust Protection with Safe Handling & Transit Protection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary font-bold">✓</span>
                                        <span>Compliance with International Shipping Standards (Sea, Air & Road Freight)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center pt-8 border-t border-gray-200 mt-4">
                            <p className="text-lg font-medium italic">"BBLINC – Precision in Every Turn."</p>
                        </div>

                    </div>
                </Container>
            </Section>
        </main>
    );
}
