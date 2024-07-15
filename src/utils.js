 export const calculateDimension = (dim, fixed) => {
    const result = (dim / fixed) * 100;
    return result + '%'; 
  };

export const calculateSize = (fontSize) => {
    const result = fontSize/16
    return result + 'rem'
}