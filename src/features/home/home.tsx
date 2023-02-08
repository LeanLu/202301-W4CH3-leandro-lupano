import { Card } from "../card/card";
import { CHARACTER } from "../mocks/characters";

export function HomePage() {
  return (
    <section className="container-list">
      <ul className="characters-list row list-unstyled">
        {CHARACTER.map((item) => (
          <Card
            key={item.age}
            status={item.status}
            characterName={item.characterName}
            family={item.family}
            age={item.age}
            picture={item.picture}
          ></Card>
        ))}
      </ul>
    </section>
  );
}
