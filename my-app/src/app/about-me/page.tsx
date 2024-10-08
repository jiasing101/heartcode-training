import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Nathan
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Computer Science</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
    </div>
  );
}