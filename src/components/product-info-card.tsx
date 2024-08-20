//
// export function ProductInfoCard() {
//   return (
//     <div className="grid gap-8 max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 shadow-lg rounded-[20px]">
//       <div className="grid gap-4">
//         <h1 className="text-3xl font-bold">Acme Smart Lamp</h1>
//         <p className="text-muted-foreground">
//           Elevate your space with the Acme Smart Lamp, a sleek and versatile lighting solution that seamlessly
//           integrates with your smart home. Enjoy customizable brightness, color temperature, and scheduling to create
//           the perfect ambiance for any occasion.
//         </p>
//       </div>
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="grid gap-4">
//           <div className="flex items-center gap-4">
//             <div className="bg-muted rounded-md p-2 flex items-center justify-center">
//               <LightbulbIcon className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-medium">Adjustable Brightness</h3>
//               <p className="text-muted-foreground text-sm">
//                 Seamlessly adjust the brightness from 10% to 100% to create the perfect ambiance.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="bg-muted rounded-md p-2 flex items-center justify-center">
//               <PaletteIcon className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-medium">Color Tuning</h3>
//               <p className="text-muted-foreground text-sm">
//                 Choose from a wide range of color temperatures to set the perfect mood.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="bg-muted rounded-md p-2 flex items-center justify-center">
//               <TimerIcon className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-medium">Scheduling</h3>
//               <p className="text-muted-foreground text-sm">
//                 Set schedules and timers to automate your lighting for convenience and energy savings.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="grid gap-4">
//           <div className="flex items-center gap-4">
//             <div className="bg-muted rounded-md p-2 flex items-center justify-center">
//               <WifiIcon className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-medium">Smart Home Integration</h3>
//               <p className="text-muted-foreground text-sm">
//                 Seamlessly integrate with your existing smart home devices and voice assistants.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="bg-muted rounded-md p-2 flex items-center justify-center">
//               <BoltIcon className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-medium">Energy Efficient</h3>
//               <p className="text-muted-foreground text-sm">
//                 {`  Save on your energy bills with the Acme Smart Lamp's energy-efficient LED technology.`}
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="bg-muted rounded-md p-2 flex items-center justify-center">
//               <SmartphoneIcon className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-medium">Mobile App Control</h3>
//               <p className="text-muted-foreground text-sm">
//                 Easily control your Acme Smart Lamp from your smartphone or tablet.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// function BoltIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
//       <circle cx="12" cy="12" r="4" />
//     </svg>
//   )
// }
//
//
// function LightbulbIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
//       <path d="M9 18h6" />
//       <path d="M10 22h4" />
//     </svg>
//   )
// }
//
//
// function PaletteIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
//       <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
//       <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
//       <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
//       <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
//     </svg>
//   )
// }
//
//
// function SmartphoneIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
//       <path d="M12 18h.01" />
//     </svg>
//   )
// }
//
//
// function TimerIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="10" x2="14" y1="2" y2="2" />
//       <line x1="12" x2="15" y1="14" y2="11" />
//       <circle cx="12" cy="14" r="8" />
//     </svg>
//   )
// }
//
//
// function WifiIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 20h.01" />
//       <path d="M2 8.82a15 15 0 0 1 20 0" />
//       <path d="M5 12.859a10 10 0 0 1 14 0" />
//       <path d="M8.5 16.429a5 5 0 0 1 7 0" />
//     </svg>
//   )
// }
