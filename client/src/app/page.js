import Test from "./components/Test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Test />
      </div>
      <div>
      <h1>Welcome to Our Company</h1>
      <Link href="/company/profile">
        <a>Company Profile</a>
      </Link>
    </div>
      
    </main>
  );
}
