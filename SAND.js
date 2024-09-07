function toNumber(value, def) {
    if (typeof(parseInt(value, 2) === 'number')) return parseInt(value, 2);
    else if (typeof(value) === 'number') return value;
    else return def;
  }

  console.log(toNumber('42', 0));