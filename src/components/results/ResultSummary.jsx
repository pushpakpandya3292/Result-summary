import React from 'react';
import { data } from '../../data';
import '../../index.css';

function ResultSummary() {
    const totalItems = data.length;
    const totalMarks = 100;
    const scores = data.map(item => item.score);
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    const percentage = Math.round((totalScore / (totalItems * totalMarks)) * 100);

    return (
        <section className="w-full flex flex-col md:flex-row bg-white shadow-[0px_30px_60px_rgba(61,108,236,0.15)] md:rounded-[32px] max-[600px]:h-screen">
            <div className="bg-[#6441fd] w-full md:max-w-[400px] rounded-b-xl md:rounded-[32px] flex-1 p-6 md:p-8 text-center bg-custom-gradient">
                <h1 className="font-[Hanken Grotesk] font-medium text-[20px] md:text-[24px] leading-[28px] md:leading-[31px] text-[#cac9ff] mb-6">Your Result</h1>
                <div className="bg-gradient-to-b from-[#4d21c9] to-transparent h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full flex items-center justify-center flex-col mx-auto mb-5">
                    <p className="font-medium text-[48px] md:text-[60px] leading-[48px] md:leading-[70px] text-center text-white mb-1">{percentage}</p>
                    <span className="font-normal text-[14px] md:text-[18px] leading-[18px] md:leading-[23px] text-[#cac9ff] opacity-50">of 100</span>
                </div>
                <h2 className="font-[Hanken Grotesk] font-medium text-[24px] md:text-[32px] leading-[31px] md:leading-[42px] text-center text-white mb-4">Great</h2>
                <p className="font-[Hanken Grotesk] font-normal text-[16px] md:text-[18px] leading-[20px] md:leading-[23px] text-center text-[#cac9ff]">
                    Your performance exceeds 65% of the people conducting the test here!
                </p>
            </div>
            <div className="flex-1 p-6 md:p-[40px] pt-0 w-full md:max-w-[350px] bg-white">
                <h2 className="font-[Hanken Grotesk] font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[31px] text-[#303b59] mt-4 md:mt-0 mb-6">Summary</h2>
                <ul className="mb-[38px] flex flex-col gap-4">
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center font-medium text-[16px] md:text-[18px] leading-[20px] md:leading-[23px] text-[#ff5555] p-[17px] bg-gradient-to-b from-[#ffffff] to-[#ffffff] bg-opacity-95 rounded-[12px] transition-transform duration-200 md:hover:shadow-lg hover:scale-105"
                            style={{ color: item.color, background: item.background }}
                        >
                            <img src={item.icon} alt="icon" className="inline-block mr-[12px]" />
                            {item.category}
                            <div className="flex flex-row ml-auto">
                                <p className="font-bold text-[16px] md:text-[18px] leading-[20px] md:leading-[23px] text-right text-[#303b59]">{item.score}</p>
                                <span className="font-medium text-[16px] md:text-[18px] leading-[20px] md:leading-[23px] text-[#00000082] opacity-70">&nbsp; / 100</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="bg-[#303b59] rounded-[128px] font-[Hanken Grotesk] font-bold text-[16px] md:text-[18px] leading-[20px] md:leading-[23px] text-white py-[17px] w-full text-center transition-transform duration-200 ease-in-out hover:bg-custom-gradient hover:shadow-lg">
                    Continue
                </button>
            </div>
        </section>
    );
}

export default ResultSummary;
