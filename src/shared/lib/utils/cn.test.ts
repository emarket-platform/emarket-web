import { describe, expect, it } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("should merge class names", () => {
    expect(cn("text-sm", "font-bold")).toBe("text-sm font-bold");
  });

  it("should handle conditional classes", () => {
    const isHidden = false;

    expect(cn("block", isHidden && "hidden")).toBe("block");
  });

  it("should resolve conflicting Tailwind classes", () => {
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
  });
});
