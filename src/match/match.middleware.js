export const matchCheckMiddleware = exhaustiveMode => (request, response, next) => {
  const match = request.body;
  console.log(match.score?.length)
  const errors = [];
  if (exhaustiveMode) {
    if (!match.team1) {
      errors.push('team1 is missing');
    }
    if (!match.team2) {
      errors.push('team2 is missing');
    }
    if (!match.score) {
      errors.push('score is missing');
    }
  }
  if (match.team1 || exhaustiveMode) {
    if (!(typeof match.team1 === 'string')) {
      errors.push('team1 must be a string');
    }
    if (!(match.team1?.length >= 2)) {
      errors.push('team1 length must be higher or equal to 2');
    }
  }
  if (match.team2 || exhaustiveMode) {
    if (!(typeof match.team2 === 'string')) {
      errors.push('team2 must be a string');
    }
    if (!(match.team2?.length >= 2)) {
      errors.push('team2 length must be higher or equal to 2');
    }
  }
  if (match.score || exhaustiveMode) {
    if (!(typeof match.score === 'string')) {
      errors.push('score must be a string');
    }
    if (!(match.score?.length == 5)) {
      errors.push('score must be n - n format');
    }
  }
  if (errors.length) {
    next({ code: 400, details: `Body has the following errors: ${errors.join(', ')}` });
  } else {
    next();
  }
};
