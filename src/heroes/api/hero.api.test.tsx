import { describe, test } from "vitest";
import { heroApi } from "./hero.api";

describe('HeroApi', () => {
    test('should be configure pointing to the testing server', () => {
        console.log(heroApi.defaults.baseURL)
    })
})