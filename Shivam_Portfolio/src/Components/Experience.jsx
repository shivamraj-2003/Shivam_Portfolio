import React from "react";

const Experience = () => {
    return (
        <div name="experience" className="bg-gray-100 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-2">Work Experience</h2>

                <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">
                            Frontend Developer intern
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Company Name -Floww Delievery ApIs
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Location</dt>
                                <dd className="mt-1 text-sm text-gray-900">Virtual (Remote)</dd>
                                <a href='/f1.png' className="mt-2 block text-blue-400 hover:text-lime-400">View Certificate</a>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Responsibilities</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    - Developed NETMOS project, focusing on cohesive UI across the website with Daily 1000+ daily active user base.<br />
                                    - One-stop solution for paper-based logistics, resulting in a 20% increase in delivery market revenue and jobs in
                                    the logistics market in Northeast states.<br />
                                    - Designed and implemented a robust E-KYC process for user authentication, streamlining logistics delivery,achieved
                                    a 30% reduction in onboarding time for new customers, facilitating faster service and enhanced user satisfaction.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">
                            Virtual Salesforce Developer intern
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Company Name - SalesForce
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Location</dt>
                                <dd className="mt-1 text-sm text-gray-900">Virtual (Remote)</dd>
                                <a href='/sl.pdf' className="mt-2 block text-blue-400 hover:text-lime-400">View Certificate</a>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Responsibilities</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    - Developing Salesforce Solutions, Writing Apex Code<br />
                                    - Customizing Salesforce Configuration, Implementing Lightning Components & API,<br />
                                    - VS Code Setup & CLI Setup, Organizational Setup, Relationship & Process Automation,<br />
                                    - Types Of Flows & Security, Apex, Testing & Debugging
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
