import { Character, Team } from './team';

test('add character to team', () => {
  const team = new Team();
  const char1 = new Character('John');
  team.add(char1);
  expect(team.toArray()).toContain(char1);
});

test('add duplicate character to team should throw error', () => {
  const team = new Team();
  const char1 = new Character('John');
  team.add(char1);
  expect(() => team.add(char1)).toThrow('Character is already in the team');
});

test('add multiple characters to team', () => {
  const team = new Team();
  const char1 = new Character('John');
  const char2 = new Character('Jane');
  team.addAll(char1, char2);
  expect(team.toArray()).toContain(char1);
  expect(team.toArray()).toContain(char2);
});

test('convert team to array', () => {
  const team = new Team();
  const char1 = new Character('John');
  const char2 = new Character('Jane');
  team.addAll(char1, char2);
  const arr = team.toArray();
  expect(arr).toEqual(expect.arrayContaining([char1, char2]));
});
