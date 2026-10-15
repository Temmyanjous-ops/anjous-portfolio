import { TLink } from "@/components/Transition";
import { Arrow } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="page">
      <section className="phead wrap">
        <p className="eyebrow mono">404</p>
        <h1 className="display">This page<br />doesn&rsquo;t exist.</h1>
        <div className="sub"><TLink className="btn btn--solid" href="/" label="Home">Back to home <Arrow /></TLink></div>
      </section>
    </div>
  );
}
