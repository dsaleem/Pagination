$( document ).ready(function(){
    let $studentname = $('h3');
    //to get the length of li 
    let $studentlist = $('.student-list li').length;
    
    //Showing the first initial ten li item(student) from the list
    $('.student-list li').slice(0,9).show();
    $('.student-list li').slice(10,$studentlist).hide();
    
    // dividing the length of li (number of student) with 10 so that each page can show ten students
    let $paginationtab = $studentlist/10;
    
    // Rounding of the result to get the approiate number of pagination links for example if the number of students are 54 the value in pagination tab would be 5.4(54/10) so the ceil function would give us value of 6 , this means there would be 6 pagination links
    
    $paginationtab = Math.ceil($paginationtab);
    
    //dynamically adding the pagination links
    
    for(i=1;i<=$paginationtab;i++)
        {
            $newli = '<li>'+'<a class="active" href="#">'+i+'</a>'+'</li>';
            $('.pagination ul').append($newli);
                
        }
    
    $('.active').on('click',function(){
    //clicking on the pagination link will store the particular link value for example if 1 is clicked , $a will store 1 
    let $a = (this.text); 
    //Converting this value from string to integer
    let $b = parseInt($a);
    // multiplying the above value with 10 as each of the page can only have 10 students 
    let $endingrange = $b*10;
    //subtracting with 10 so that each of the page can only have 10 students
    let $startrange = $endingrange - 10;
    //clicking on each of the link would hide all the li (students list)and will only dislplay the range of students appropiate to this particular pagination link
    $('.student-list li').hide();
    $('.student-list li').slice($startrange,$endingrange).show();
        
        
    });
});
