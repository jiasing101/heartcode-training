import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Selfie from "@/app/assets/image.jpg";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AboutMe() {
  return (
    <div>
        Hello world this is the about me route
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am Nathan
                </CardTitle>
                <CardDescription>
                    I like to code
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={Selfie} alt="Selfie" width={300} height={300}/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Nathan
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Computer Science</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Alert>
            <Terminal className="h-4 w-4"/>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>I have added an alert</AlertDescription>
        </Alert>
    </div>
  );
}