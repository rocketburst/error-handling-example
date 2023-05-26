import Table from "@/components/Table";
import { AuthRequiredError } from "@/lib/exceptions";

const session = null;

export default function Home() {
  if (!session) throw new AuthRequiredError();

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="overflow-x-auto">
        <Table />
      </div>
    </main>
  );
}
