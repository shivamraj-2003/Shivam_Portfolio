import React from 'react';
import Achieve from '../Components/Achieve';

const Archieve = () => {
    return (
        <section className="bg-sky-200 py-12">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Achievements</h1>
                <div className="flex flex-wrap justify-center">
                    <Achieve
                        title="First Achievement"
                        description="I have Successfully completed Google cloud bootcamp orgainised by Google and GFG."
                    />
                    <Achieve
                        title="Second Achievement"
                        description="Wins the Digital reward kit in Hacktoberfest 2023 for contributing in open source."
                    />
                    <Achieve
                        title="Third Achievement"
                        description="Winner of Smart India Internal College Hackathon by making Project street light fault detection system"
                    />
                    {/* Add more achievements */ }
                </div>
            </div>
        </section>
    );
};

export default Archieve;
