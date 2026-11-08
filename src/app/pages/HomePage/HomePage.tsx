const appName = import.meta.env.VITE_APP_NAME;

export function HomePage() {
    return (
        <section>
            <h1>Welcome to {appName}</h1>

            <p>
                Your online shopping platform.
            </p>
        </section>
    );
}