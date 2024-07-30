/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: Olog(n)
Explanation: the ids were already sorted beforehand so using ubble sort, even we're reaching the worst case scenario, the process wil not seach one by one but will scope the target by halve of the target list


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: Olog(n)
Explanation: the process is to search for a name through the list of items, which is also sorted by names beforehand, so the logic is similair to the first question ehich we will set a scope and then check for the desired case.


*/

/* 
Which function is more efficient and why?
Answer: depends, if the list were not sorted beforehans, Binary search won't work and we have to use linear instead. In this case Binary search is better because since the items were already sorted, binary search will ggranting the result of lower bigO notationwhich defines the efficiency of the code more than linear search.


*/
