function Elipses (text,max){
  return text.substr(0,max-1)+(text.length>max?' ...':'')
}

export default Elipses
