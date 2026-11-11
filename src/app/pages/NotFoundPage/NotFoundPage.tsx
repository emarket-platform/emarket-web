/*
    Назначение: обработать URL, для которого нет зарегистрированного маршрута.
    Например:
    http://localhost:5174/something-unknown
*/
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section>
      <h1>404 - Page Not Found</h1>

      <p>The page you are looking for does not exist.</p>

      <Link to="/">Go to Home</Link>
    </section>
  );
}
