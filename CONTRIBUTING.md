# Adding a skill (checklist for Lucas and Claude)

Every giveaway skill goes through this before it is pushed:

1. **Own folder** at the repo root: `<skill-name>/` with `SKILL.md`, `README.md` (its public page: what it does, install, the sentence to say to start it), and `references/` / `assets/` as needed.
2. **Clean pass:** no Valiris data, client or partner names, private paths, keys, emails or phone numbers. Grep for them before committing.
3. **Works for strangers:** no assumptions about Lucas's setup. Anything personal becomes a question the skill asks, or a config value.
4. **Tested:** run it once end to end (or the parts that can run locally) before it goes public.
5. **Zip for claude.ai:** rebuild `dist/<skill-name>.zip` (the folder at the zip root).
6. **Catalogue:** add a row to the table in the root `README.md`.
7. **The video's DM link** = `https://github.com/Inscaled-Academy/skills/tree/main/<skill-name>`.
