package org.minjaeacademy.practice;

import java.io.IOException;

public class CustomExceptionMainDemo {

	public static void main(String[] args) throws CustomExceptionDemo {
		// TODO Auto-generated method stub
//		CustomExceptionDemo aa = new CustomExceptionDemo();
//		aa.someMethod();
//		throw new CustomExceptionDemo("기모찌 데스네");
//		throw new RuntimeException("기모찌 데스네");
		
		try 
		{
			System.out.println("Inside the try block");
			Integer.parseInt("123452dweqwe");
		} 
		catch (NumberFormatException e) 
		{
			e.printStackTrace();
		}
		catch (Exception e) 
		{
			// TODO: handle exception
			e.printStackTrace();
			System.out.println("Inside the catch block");
		} 
		finally 
		{
			System.out.println("Inside the finally block");
		}
		System.out.println("after the  try-catch-finally block");
		
	}

}
