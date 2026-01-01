// import { requiredAuth } from "@/lib/auth-utils";
// import { SignOutButton } from "@/components/sign-out-button";

// export default async function Home() {
//   await requiredAuth();
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       Server component
//       <SignOutButton />
//     </div>
//   );
// }


// {/* <HydrationBoundary>
//         <Suspense>

//         </Suspense>
//       </HydrationBoundary> */}


// // Which is protected which one not ? 
// // can we use middleware? 
// // only use it for better experience and do not use it as security layer
// // they have be counted instance of broken library which use middleware
// // that why we develop data access layer, that's why we won't call directrly call prisma and called TRPC
// // and in there we have something called protected precedure 
// // ask this question can the unauth user access this page or not if yes 
// // TRPC data access layer is protected and check authProtection checks within server component to redirect
// // Last level of security is trpc not middleware or in here auth-utils
// // sentray for Error tracking and monitoring of users what they are doing on the website(anonymously)