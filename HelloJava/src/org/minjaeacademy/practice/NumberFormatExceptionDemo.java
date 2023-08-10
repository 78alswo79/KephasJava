package org.minjaeacademy.practice;

import java.util.Scanner;

public class NumberFormatExceptionDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		String input = scanner.nextLine();
		
		if (input.matches("\\d+")) 
		{
			int number = Integer.parseInt(input);
			System.out.println(number + 1);			
		} else 
		{
			System.out.println("Incorrect number: "+input);
		}
	}

}
