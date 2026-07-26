import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import PageHeader from "@/components/shared/PageHeader";

export default function PrivacyPolicyPage() {
    return (
        <main key="privacy-policy">
            <PageHeader
                title="Privacy Policy"
                eyebrowText="Legal"
            />
            <Section className="py-20 min-h-max bg-[#fafaf8]">
                <Container>
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-black/10 shadow-sm flex flex-col gap-8 text-gray-700 leading-relaxed">

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">1. Introduction</h2>
                            <p>
                                At BBLINC, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, request quotes, or submit inquiries.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">2. Information We Collect</h2>
                            <p className="mb-2">We collect information that you voluntarily provide to us when you fill out forms on our website, such as the Contact or Quote forms. This information may include:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Personal Details:</strong> Full Name, Email Address, and Phone Number.</li>
                                <li><strong>Business Details:</strong> Company Name and Industry.</li>
                                <li><strong>Project Specifications:</strong> Project Details, Quantity required, Expected timeline (in days), and uploaded technical files (such as CAD drawings, PDFs, or STEP files).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">3. How We Use Your Information</h2>
                            <p className="mb-2">The information we collect is strictly used to facilitate business communications and fulfill manufacturing requests. Specifically, we use your data to:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Respond to your inquiries and provide customer support.</li>
                                <li>Review your project requirements and prepare comprehensive, customized quotes.</li>
                                <li>Assess the manufacturing feasibility of your designs based on uploaded drawings.</li>
                                <li>Communicate with you throughout the manufacturing and delivery processes.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">4. Data Security and Confidentiality</h2>
                            <p>
                                As a precision engineering partner, we understand the critical nature of intellectual property. All uploaded technical drawings, CAD files, and project details are treated with the utmost confidentiality. We implement appropriate technical and organizational measures to secure your data against unauthorized access, alteration, or disclosure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">5. Information Sharing</h2>
                            <p>
                                We do not sell, rent, or trade your personal or business information to third parties. We may share necessary details with trusted logistics and shipping partners strictly for the purpose of delivering your finished components globally.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">6. Your Rights</h2>
                            <p>
                                You have the right to request access to the personal data we hold about you, request corrections to any inaccuracies, or ask for the deletion of your data where applicable. To exercise these rights, please contact us using the details provided below.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-gray-200 mt-4">
                            <h2 className="text-2xl font-semibold text-black mb-4">7. Contact Us</h2>
                            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
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
        </main>
    );
}
