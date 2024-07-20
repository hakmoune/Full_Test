import { useEffect, useState } from "react";

export default function useDebounceQuery(searchQuery: string) {
  const [debounceQuery, setDebounceQuery] = useState<string>(searchQuery);

  // setTimeout is used to delay updating debouncedQuery until 500 milliseconds after the user stops typing.
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceQuery(searchQuery.trim());
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery.trim()]);

  return { debounceQuery };
}
