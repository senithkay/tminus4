import { JSX, SVGProps } from "react";

export function PrebuildProducts() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container grid items-center justify-center gap-12 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Customizable Pre-Build Software Solutions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {`We offer a range of pre-built software solutions that can be easily customized to meet your specific needs.`}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <div className="grid gap-8 max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 shadow-lg rounded-[20px]">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold">
                Secure Attendance Management System
              </h1>
              <p className="text-muted-foreground">
                {`Our Secure Attendance Marking System is a robust solution designed for educational institutes and organizations, ensuring accurate and secure attendance tracking.`}{" "}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid gap-4 ">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                    <LightbulbIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Fool-proof Attendance Marking</h3>
                    <p className="text-muted-foreground text-sm">
                      {`Prevents any form of proxy attendance, guaranteeing authenticity.`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                    <PaletteIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Real-Time Data Synchronization
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {`Instantly syncs attendance data with the central database, ensuring up-to-date records at all times.`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                    <TimerIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Comprehensive Reporting</h3>
                    <p className="text-muted-foreground text-sm">
                      {`Customizable reports to meet the specific needs of different departments or management levels.`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex  gap-4">
                  <div className="bg-muted rounded-md p-2 flex  justify-center">
                    <WifiIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Integration Capabilities</h3>
                    <p className="text-muted-foreground text-sm">
                      {`Easily integrates with existing internal systems or academic management systems for seamless data flow.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8 max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 shadow-lg rounded-[20px]">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold">
                Report and Document Generator Tool
              </h1>
              <p className="text-muted-foreground">
                Our Report and Document Generator Tool leverages JasperReports
                to create dynamic templates that can be seamlessly populated
                with business data from your existing databases.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                    <LightbulbIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Data Integration</h3>
                    <p className="text-muted-foreground text-sm">
                      {`Automatically pull and populate data from your business databases into the templates.`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                    <PaletteIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Easy Integration</h3>
                    <p className="text-muted-foreground text-sm">
                      {`Integrate the tool effortlessly with your existing business software, ensuring smooth operation within your workflow.`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                    <TimerIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Multi-Format Output</h3>
                    <p className="text-muted-foreground text-sm">
                      {`Generate reports in various formats such as PDF, Excel, Word, and HTML.`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex gap-4">
                  <div className="bg-muted rounded-md p-2 flex  justify-center">
                    <WifiIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Customization</h3>
                    <p className="text-muted-foreground text-sm">
                      {
                        "Modify templates to meet specific business needs, ensuring that reports are aligned with your brand and operational requirements."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8 max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 shadow-lg rounded-[20px]">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold">Email Marketing Solution</h1>
              <p className="text-muted-foreground">
                {`Our Email Marketing Solution empowers businesses to connect with their audience effectively through personalized and targeted email campaigns. `}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                    <LightbulbIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Automation and Workflows</h3>
                    <p className="text-muted-foreground text-sm">
                      Set up automated workflows for welcome emails, follow-ups,
                      abandoned cart reminders, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                    <PaletteIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Schedule campaigns</h3>
                    <p className="text-muted-foreground text-sm">
                      Schedule campaigns in advance to reach your audience at
                      the optimal time.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md p-2 flex items-center justify-center">
                    <TimerIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Integration Capabilities</h3>
                    <p className="text-muted-foreground text-sm">
                      Seamlessly integrate with existing business tools for a
                      streamlined marketing process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex gap-4">
                  <div className="bg-muted rounded-md p-2 flex justify-center">
                    <WifiIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Compliance and Security</h3>
                    <p className="text-muted-foreground text-sm">
                      Secure data handling and encryption to protect your
                      customer information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaletteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function SmartphoneIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function TimerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}

function WifiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}

function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function LightbulbIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
