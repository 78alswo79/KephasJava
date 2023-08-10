package org.minjaeacademy.practice;

import java.io.IOException;

public class ThrowableDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//RuntimeException exception = new RuntimeException("Something's bad.");
		//throw new Throwable("Something's bad.");
		//throw new Exception("예외 발생!");
		throw new NullPointerException("널참조 예외 발생!!");
//		String found = "//fdsafd";
	}
	
//	public static String readTextDemo(String path) throws IOException {
//		if (!found) {
//			throw new IOException("the file is not found");
//		}
//	}

}
