package org.minjaeacademy.practice;

public class OverridingDemo {
	/*1. 수퍼클래스 메소드 재정의*/
	public String sayHello() {
		return "ohlllalalalalalalalaloaoaoaoao";
	}
	
	/*2. 수퍼클래스 메소드 재정의 못하게하기 */
	public final void sayHello2() {
	}
	
}

class Cat extends OverridingDemo {
	@Override
	public String sayHello() {
		return "야야야옹야옹야옹";
	}
	
	/* 수퍼클래스에서 final로 인해 재정의가 안됨. */
//	@Override
//	public void sayHello2() {
//	}
}

class Human extends OverridingDemo {
	
	@Override
	public String sayHello() {
		return "hello";
	}
	
	/* 수퍼클래스에서 final로 인해 재정의가 안됨. */
//	@Override
//	public void sayHello2() {
//	}
}


