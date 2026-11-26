import { useEffect } from "react";
import { supabase } from "./services/supabase";

function App() {
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .limit(1);  

        if (error) {
          console.log("Supabase response:", error.message);
          return;
        }

        console.log("Supabase connected successfully!", data);
      } catch (err) {
        console.error("Connection failed:", err);
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <h1 className="text-3xl font-bold text-white">LeadFlow CRM</h1>
    </div>
  );
}

export default App;
