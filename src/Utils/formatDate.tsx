export const getFormatedDate = (date :string) =>{
    let trimmedDate = date.split("T")[0]
  
        const dateObj = new Date(trimmedDate);
        
        // Format the date to: 5 Oct 2024
        return dateObj.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
      };

