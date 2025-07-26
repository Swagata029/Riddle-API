import { Controller, Get } from '@nestjs/common';

@Controller()
export class RiddleController {
  private riddles = [
    {
      riddle: 'What goes up but never comes down?',
      answer: ['age', 'ages'],
    },
    {
      riddle: 'How many months of the year have 28 days?',
      answer: ['12', 'twelve'],
    },
    {
      riddle:
        'Pearl white chest without key or lid. Inside of which, a golden treasure is hid. What am I?',
      answer: ['egg', 'eggs'],
    },
    {
      riddle:
        'Six letters it contains; remove one letter, and twelve remain. What is it?',
      answer: ['dozens'],
    },
    {
      riddle:
        'I can fly but have no wings. I can cry but I have no eyes. Wherever I go, darkness follows me. What am I?',
      answer: ['clouds', 'cloud'],
    },
    {
      riddle: 'What has to be broken before you can use it?',
      answer: ['egg', 'eggs'],
    },
    {
      riddle: 'People buy me to eat, but never eat me. What am I?',
      answer: ['cutlery', 'plates', 'plate', 'utensils', 'utensil','spoon', 'spoons', 'fork', 'forks'],
    },
    {
      riddle: 'The more you take, the more you leave behind. What are they?',
      answer: ['footsteps', 'footstep', 'steps', 'step'],
    },
    {
      riddle:
        ' I’m tall when I’m young, and I’m short when I’m old. What am I?',
      answer: ['candle', 'candles'],
    },
    {
      riddle: 'What has teeth, but cannot chew?',
      answer: ['comb', 'combs'],
    },
    {
      riddle:
        'What’s green, but not a leaf, and mimics others, but is not a monkey?',
      answer: ['parrot', 'parrots'],
    },
    {
      riddle: 'Light as a feather, there’s nothing in it, but the strongest man can’t hold it much more than a minute.',
      answer: ['breath'],
    },
    {
      riddle: 'I am always in front and never behind. What am I?',
      answer: ['future'],
    },
    {
      riddle: ' What runs around the whole yard without moving?',
      answer: ['fence', 'fences'],
    },
    {
      riddle: 'They have no flesh, nor feathers, nor scales, nor bone, but they do have fingers and thumbs of their own. What are they?',
      answer: ['gloves', 'glove'],
    },
    {
      riddle: ' I have a tail and a head, but no body. What am I?',
      answer: ['coin', 'coins'],
    },
    {
      riddle: ' If you have me, you will want to share me. If you share me, you will no longer have me. What am I?',
      answer: ['secret', 'secrets'],
    },
    {
      riddle: 'What comes once in a minute, twice in a moment, but never in a thousand years?',
      answer: ['m'],
    },
    {
      riddle: 'What always ends everything?',
      answer: ['g'],
    },
    {
      riddle: 'I’m the rare case when today comes before yesterday. What am I?',
      answer: ['dictionary', 'dictionaries'],
    },
    {
      riddle: 'What is full of holes but can still hold water?',
      answer: ['sponge', 'sponges'],
    },
    {
      riddle: ' What begins and ends with an ‘e’ but only contains one letter?',
      answer: ['envelope', 'envelopes'],
    },
    {
      riddle: 'After a train crashed, every single person died. Who survived?',
      answer: ['couple', 'couples'],
    },
    {
      riddle: 'A man shaves several times a day but still has a beard. Who is he?',
      answer: ['barber'],
    },
    {
      riddle: 'What is the thing that you can never eat for lunch and dinner?',
      answer: ['breakfast'],
    },
  ]; //25 Riddles

  @Get('riddle')
  getRandomRiddles() {
    const random =
      this.riddles[Math.floor(Math.random() * this.riddles.length)];
    return random;
  }
}
