import Image from "next/image";
import DontDoDrugs from "@/app/assets/dont do drugs.png";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/background-beams";
export default function Home() {
  const words: string[] = ["skibidi", "litty", "sigma"];

  return (
    
    <div>
      <div className="flex flex-col justify-center h-dvh z-10">
        <h1 className="font-bold text-5xl text-center">Drugs are not <FlipWords words={words}/></h1>
        <br/>
        {/* <p className="text-sm text-center max-w-5xl mx-auto p-4 z-10">Although Singapore has generally been able to handle drug and substance abuse 
                                          problems, the issue unfortunately still persists, especially in lower income 
                                          families where lack of information and awareness about substance abuse is prevelant. 
                                          This is especially an issue for children, teenagers, and young adults, which 
                                          are often the most common age groups in which drug use begins. In just 2023, 
                                          more than half of drug abusers arrested in Singapore were below the age of 
                                          30 according to the Central Narcotics Bureau. Additionally, from 2022 to 
                                          2023, the number of new abusers rose by 19%. With this pattern of increase, 
                                          it is extremely important that drug/substance abuse awareness is equally 
                                          spread across Singapore, regardless of low, middle, high income status.</p> */}
        <div className="flex justify-center z-10">
          <Image src={DontDoDrugs} alt="DontDoDrugs" width={500}/>
        </div>
      </div>
    <BackgroundBeams/>
    </div>
  );
}
