const getDiffDate = (year) =>{
  return new Date().getFullYear() - year
}

const calcMarca = (marca) =>{
  const increment = {
    'Americano':1.30,
    'Europeo':1.15,
    'Asiatico':1.05
  }
  return increment[marca]
}

const searchPlan = (plan) =>{
  return (plan === 'Basic') ? 1.20 : 1.50
}

const lettersMayus = (text) =>{
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export { getDiffDate, calcMarca, searchPlan, lettersMayus }