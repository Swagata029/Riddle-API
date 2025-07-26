import { Controller, Get } from '@nestjs/common';

@Controller()
export class RiddleController {
  private riddles = [
    {
      riddle: 'What goes up but never comes down?',
      answer: ['age'],
    },
    {
      riddle: 'How many months of the year have 28 days?',
      answer: ['12', 'twelve'],
    },
    {
      riddle:
        'Pearl white chest without key or lid. Inside of which, a golden treasure is hid. What am I?',
      answer: ['egg'],
    },
    {
      riddle:
        'Six letters it contains; remove one letter, and twelve remain. What is it?',
      answer: ['dozens'],
    },
    {
      riddle:
        'I can fly but have no wings. I can cry but I have no eyes. Wherever I go, darkness follows me. What am I?',
      answer: ['clouds'],
    },
    {
      riddle: 'What has to be broken before you can use it?',
      answer: ['egg'],
    },
    {
      riddle: 'People buy me to eat, but never eat me. What am I?',
      answer: ['cutlery', 'plates', 'utensils', 'spoon', 'fork'],
    },
    {
      riddle: 'The more you take, the more you leave behind. What are they?',
      answer: ['footsteps', 'steps'],
    },
    {
      riddle:
        ' I’m tall when I’m young, and I’m short when I’m old. What am I?',
      answer: ['candle'],
    },
    {
      riddle: 'What has teeth, but cannot chew?',
      answer: ['comb'],
    },
    {
      riddle:
        'What’s green, but not a leaf, and mimics others, but is not a monkey?',
      answer: ['parrot'],
    },
  ];

  @Get('riddle')
  getRandomRiddles() {
    const random =
      this.riddles[Math.floor(Math.random() * this.riddles.length)];
    return random;
  }
}
