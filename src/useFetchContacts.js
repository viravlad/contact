import { useEffect, useState } from "react";
import { getContactService } from "./ContactService";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getContact();
  }, []);

  async function getContact() {
    try {
      setIsLoading(true);

      const data = await getContactService();
      const dataJson = await data.json();
      const contactsPerson = dataJson.results.map((contact) => {
        return {
          firstName: contact.name.first,
          lastName: contact.name.last,
          phoneNumber: contact.cell,
          picture: contact.picture.thumbnail,
        };
      });

      setData(contactsPerson);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, error, isloading };
}
