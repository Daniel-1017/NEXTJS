import { unstable_noStore } from 'next/cache';
import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// ! Managing cache for all requests in the file
// export const revalidate = 5;
// export const dynamic = "force-dynamic" // default: "auto"

export default async function MessagesPage() {
  // unstable_noStore(); // it is the same as settings the dynamic variable to "force-dynamic"
  // unstable_noStore, disables caching just in one component
  /* const response = await fetch('http://localhost:8080/messages', {
    // cache: "no-store" // data will not be cached
    next: {
      // revalidate: 5 // the cached data should be re-used for 5 seconds, and then it should send a request to get new data
      tags: ["msg"]
    }
  });
  const messages = await response.json(); */

  const messages = await getMessages()

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
