import Table from "@/components/Table";

const session = null;

export default function Home() {
  if (!session) throw new Error("Auth is required to access this page");

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="overflow-x-auto">
        <Table />
      </div>
    </main>
  );
}
