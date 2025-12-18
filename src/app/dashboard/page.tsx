import DashboardLayout from "@/app/components/DashboardLayout/DashboardLayout";
import DashboardContent from "@/app/components/DashboardContent/DashboardContent";

export default function Dashboard() {
  // This is a server component - you can fetch data here from database/API
  // const userData = await getUserData(); // Example server-side data fetching

  return (
    <DashboardLayout userIsAdmin={true} userIsOwner={false}>
      <div style={{ padding: "20px" }}>
        <DashboardContent />
      </div>
    </DashboardLayout>
  );
}
