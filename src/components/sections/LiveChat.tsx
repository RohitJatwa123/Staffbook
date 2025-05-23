// 'use client';

// import { motion } from 'framer-motion';
// import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

// export const LiveChat = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="py-16 bg-white"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           {/* Left side - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="flex-1 text-left"
//           >
//             <IoChatbubbleEllipsesOutline className="text-5xl text-blue-600 mb-4" />
//             <h2 className="text-3xl font-bold mb-6">Live Chat Support</h2>
//             <p className="text-gray-600 mb-8">
//               Connect with your team in real-time through our intuitive live chat feature. 
//               Share updates, resolve queries, and maintain seamless communication across your organization.
//             </p>
//             <ul className="space-y-4 text-gray-600">
//               <li className="flex items-center">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
//                 Real-time messaging and notifications
//               </li>
//               <li className="flex items-center">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
//                 File sharing and media support
//               </li>
//               <li className="flex items-center">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
//                 Group chats and private conversations
//               </li>
//             </ul>
//           </motion.div>

//           {/* Right side - Mobile Frame */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//             className="flex-1"
//           >
//             <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] shadow-xl border-[14px] border-gray-900">
//               {/* Phone notch */}
//               <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl">
//                 <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded"></div>
//               </div>
              
//               {/* Chat Interface */}
//               <div className="h-full bg-gray-100 rounded-[2rem] overflow-hidden">
//                 {/* Chat Header */}
//                 <div className="bg-blue-600 text-white p-4">
//                   <div className="text-sm font-medium">Team Chat</div>
//                 </div>
                
//                 {/* Chat Messages */}
//                 <div className="p-4 space-y-4">
//                   <div className="flex justify-start">
//                     <div className="bg-white rounded-lg p-3 shadow max-w-[80%]">
//                       <p className="text-sm">Hey team, how's the progress?</p>
//                     </div>
//                   </div>
//                   <div className="flex justify-end">
//                     <div className="bg-blue-600 text-white rounded-lg p-3 shadow max-w-[80%]">
//                       <p className="text-sm">Going great! Almost finished with the design.</p>
//                     </div>
//                   </div>
//                   <div className="flex justify-start">
//                     <div className="bg-white rounded-lg p-3 shadow max-w-[80%]">
//                       <p className="text-sm">Awesome! Can't wait to see it.</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Chat Input */}
//                 <div className="absolute bottom-0 inset-x-0 p-4 bg-white border-t">
//                   <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
//                     <div className="flex-1 h-6 bg-gray-200 rounded"></div>
//                     <button className="ml-2 text-blue-600">
//                       <IoChatbubbleEllipsesOutline className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     {/* </motion.section> */}
//   );
// }; 