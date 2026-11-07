const appName = import.meta.env.VITE_APP_NAME;

export function App() {
  return (
      <main>
        <h1>{appName}</h1>
        <p>Frontend application is running.</p>
      </main>
  );
}