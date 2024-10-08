import Image from "next/image";
import DontDoDrugs from "@/app/assets/dont do drugs.png";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center h-dvh">
        <p className="font-bold text-5xl text-center">Drug/Substance Abuse</p>
        <br/>
        <p className="text-sm text-center max-w-5xl mx-auto p-4">Although Singapore has generally been able to handle drug and substance abuse 
                                          problems, the issue unfortunately still persists, especially in lower income 
                                          families where lack of information and awareness about substance abuse is prevelant. 
                                          This is especially an issue for children, teenagers, and young adults, which 
                                          are often the most common age groups in which drug use begins. In just 2023, 
                                          more than half of drug abusers arrested in Singapore were below the age of 
                                          30 according to the Central Narcotics Bureau. Additionally, from 2022 to 
                                          2023, the number of new abusers rose by 19%. With this pattern of increase, 
                                          it is extremely important that drug/substance abuse awareness is equally 
                                          spread across Singapore, regardless of low, middle, high income status.</p>
        <div className="flex justify-center">
          <Image src={DontDoDrugs} alt="DontDoDrugs" width={500}/>
        </div>
      </div>
    </div>
  );
}
