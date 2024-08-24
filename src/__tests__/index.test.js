import Charapter from "../js/Charapter";
import Bowerman from "../js/Bowerman";
import Swordsman from "../js/Swordsman";
import Magician from "../js/Magician";
import Daemon from "../js/Daemon";
import Undead from "../js/Undead";
import Zombie from "../js/Zombie";

test('should throw error "Имя должно быть от 2 до 10 символов"', () => {
    expect(() => new Bowerman('n')).toThrow('Имя должно быть от 2 до 10 символов');
    expect(() => new Charapter('n')).toThrow('Имя должно быть от 2 до 10 символов');
    expect(() => new Swordsman('n')).toThrow('Имя должно быть от 2 до 10 символов');
    expect(() => new Magician('n')).toThrow('Имя должно быть от 2 до 10 символов');
    expect(() => new Daemon('n')).toThrow('Имя должно быть от 2 до 10 символов');
    expect(() => new Undead('n')).toThrow('Имя должно быть от 2 до 10 символов');
    expect(() => new Zombie('n')).toThrow('Имя должно быть от 2 до 10 символов');
});

test('should levelUp is truthy', () => {
    const test = new Swordsman('Swords');
    test.levelUp();
    expect(test.level).toBe(2);
});

test('should error "Нельзя повысить уровень умершего"', () => {
    const magic = new Magician('Andrew');
    magic.health = 0;
    expect(() => magic.levelUp()).toThrow('Нельзя повысить уровень умершего')
});

test('should method damage is truthy', () => {
    const daemon = new Daemon('Vasya');
    daemon.damage(10);
    expect(daemon.health).not.toBe(100);
});

test('should method damage is not damege over 0 hp', () => {
    const bow = new Bowerman('Anton');
    bow.health = 0;
    bow.damage(10000);
    expect(bow.health).toBe(0)
});
