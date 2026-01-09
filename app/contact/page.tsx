import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <h1 className="font-semibold text-xl tracking-tighter mb-2">
        Looking to hire a developer? Let's talk
      </h1>
      <div className="mb-4">
        <Card className="h-full bg-white border border-gray-200 shadow-lg rounded-lg p-4 transition-shadow">
          <div className="space-y-2">
            <p className="text-lg text-gray-600">
              For the last five years, I've been accumulating professional
              experience in industries like full-stack development, analytics
              implementation, and data science.
            </p>
          </div>
        </Card>
      </div>
      <h1 className="font-semibold text-xl tracking-tighter mb-2">
        What can I help with?
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card className="h-full bg-white border border-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">
                  Website Development
                </h4>
                <p className="text-sm text-gray-600">
                  5+ years professional experience
                </p>
              </div>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent
            className="bg-white border border-gray-200 shadow-xl rounded-lg p-4 w-80 z-50"
            sideOffset={5}
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Experienced web developer. Proficient in JavaScript, TypeScript,
                ReactJS, NextJS
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card className="h-full bg-white border border-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">
                  Analytics Implementation
                </h4>
                <p className="text-sm text-gray-600">
                  Ex-senior analytics developer
                </p>
              </div>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent
            className="bg-white border border-gray-200 shadow-xl rounded-lg p-4 w-80 z-50"
            sideOffset={5}
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Designed, implemented, & maintained clickstream analytics
                architecture for companies like Realtor.com, Highrises.com,
                Athome.com
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card className="h-full bg-white border border-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">
                  Data Science & Analytics
                </h4>
                <p className="text-sm text-gray-600">
                  MS Degree, Ex-data scientist
                </p>
              </div>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent
            className="bg-white border border-gray-200 shadow-xl rounded-lg p-4 w-80 z-50"
            sideOffset={5}
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Researched complex neural network modeling, consistently
                analyzed analytics for websites
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <h1 className="font-semibold text-xl tracking-tighter mb-2">Why me?</h1>
      <div className="grid md:grid-cols-1 gap-4 mb-4">
        <Card className="h-full bg-white border border-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">
              Excellent communicator & organizer
            </h4>
          </div>
        </Card>
        <Card className="h-full bg-white border border-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Fast learner</h4>
          </div>
        </Card>
        <Card className="h-full bg-white border border-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">
              Strong technical abilities
            </h4>
          </div>
        </Card>
      </div>
      <h1 className="font-semibold text-xl tracking-tighter mb-2">
        Want to chat?
      </h1>
      <Link href="mailto:dfox@dylanfox.net">
        <Button
          className="h-full bg-white border border-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow cursor-pointer"
          variant="outline"
        >
          Shoot me a message
        </Button>
      </Link>
    </section>
  );
}
