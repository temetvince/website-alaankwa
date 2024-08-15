import axios from "axios";

export const run = async () => {
   try {
      await axios.post("http://localhost:8000/tbl", { name: "John Doe" });
   } catch (error) {
      console.error(error);
   }
};
