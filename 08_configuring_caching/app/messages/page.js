import Messages from '@/components/messages';

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages', {
    // cache: "no-store" // data will not be cached
    next: {
      revalidate: 5 // the cached data should be re-used for 5 seconds, and then it should send a request to get new data
    }
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
